package com.helpdesk.demo.services;

import java.io.UnsupportedEncodingException;
import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.helpdesk.demo.domain.Pessoa;
import com.helpdesk.demo.domain.Tecnico;
import com.helpdesk.demo.dtos.TecnicoDTO;
import com.helpdesk.demo.repositories.PessoaRepository;
import com.helpdesk.demo.repositories.TecnicoRepository;
import com.helpdesk.demo.services.exceptions.DataIntegrityViolationException;
import com.helpdesk.demo.services.exceptions.ObjectNotFoundException;

import jakarta.validation.Valid;

@Service
public class TecnicoService {

	@Autowired
	private TecnicoRepository repository;

	@Autowired
	private PessoaRepository pessoaRepository;
	

	public Tecnico findById(Integer id) {
		Optional<Tecnico> obj = repository.findById(id);
		return obj.orElseThrow(() -> new ObjectNotFoundException("Objeto não encontrado"));
	}

	public List<Tecnico> findAll() {
		return repository.findAll();
	}

	public Tecnico create(TecnicoDTO objDTO) throws NoSuchAlgorithmException, UnsupportedEncodingException {
		objDTO.setId(null);
		validateCpfEmail(objDTO);
		String senha = encriptPassword(objDTO.getSenha());
		objDTO.setSenha(senha);
		Tecnico newObj = new Tecnico(objDTO);
		return repository.save(newObj);
	}

	public Tecnico update(Integer id, @Valid TecnicoDTO objDTO) throws NoSuchAlgorithmException, UnsupportedEncodingException {
		objDTO.setId(id);
		Tecnico oldObj = findById(id);
		validateCpfEmail(objDTO);
		String senha = encriptPassword(objDTO.getSenha());
		objDTO.setSenha(senha);
		oldObj = new Tecnico(objDTO);
		return repository.save(oldObj);
	}
	
	public static String encriptPassword(String password) throws NoSuchAlgorithmException, UnsupportedEncodingException {
        MessageDigest messageDigest =  MessageDigest.getInstance("SHA-256");
        messageDigest.update(password.getBytes("UTF-8"));
        return new BigInteger(1, messageDigest.digest()).toString(16);
    }

	public void delete(Integer id) {
		Tecnico obj = findById(id);
		if (obj.getChamados().size() > 0) {
			throw new DataIntegrityViolationException("Tecnico possui ordens de serviço e não pode ser deletado!");
		}
		repository.deleteById(id);
	}

	private void validateCpfEmail(TecnicoDTO objDTO) {
		Optional<Pessoa> obj = pessoaRepository.findByCpf(objDTO.getCpf());
		if (obj.isPresent() && obj.get().getId() != objDTO.getId()) {
			throw new DataIntegrityViolationException("CPF já cadastrado no sistema.");
		}
		obj = pessoaRepository.findByEmail(objDTO.getEmail());
		if (obj.isPresent() && obj.get().getId() != objDTO.getId()) {
			throw new DataIntegrityViolationException("Email já cadastrado no sistema.");
		}
	}

}
