package com.helpdesk.demo.services;

import java.io.UnsupportedEncodingException;
import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.helpdesk.demo.domain.Cliente;
import com.helpdesk.demo.domain.Pessoa;
import com.helpdesk.demo.dtos.ClienteDTO;
import com.helpdesk.demo.repositories.ClienteRepository;
import com.helpdesk.demo.repositories.PessoaRepository;
import com.helpdesk.demo.services.exceptions.DataIntegrityViolationException;
import com.helpdesk.demo.services.exceptions.ObjectNotFoundException;

import jakarta.validation.Valid;

@Service
public class ClienteService {

	@Autowired
	private ClienteRepository repository;

	@Autowired
	private PessoaRepository pessoaRepository;

	public Cliente findById(Integer id) {
		Optional<Cliente> obj = repository.findById(id);
		return obj.orElseThrow(() -> new ObjectNotFoundException("Objeto não encontrado"));
	}

	public List<Cliente> findAll() {
		return repository.findAll();
	}

	public Cliente create(ClienteDTO objDTO) throws NoSuchAlgorithmException, UnsupportedEncodingException {
		objDTO.setId(null);
		String senha = encriptPassword(objDTO.getSenha());
		objDTO.setSenha(senha);
		validateCpfEmail(objDTO);
		Cliente newObj = new Cliente(objDTO);
		return repository.save(newObj);
	}

	public Cliente update(Integer id, @Valid ClienteDTO objDTO) throws NoSuchAlgorithmException, UnsupportedEncodingException {
		objDTO.setId(id);
		Cliente oldObj = findById(id);
		validateCpfEmail(objDTO);
		if(!objDTO.getSenha().equals(oldObj.getSenha())) {
			String senha = encriptPassword(objDTO.getSenha());
			objDTO.setSenha(senha);
		}
		oldObj = new Cliente(objDTO);
		return repository.save(oldObj);
	}
	
	public static String encriptPassword(String password) throws NoSuchAlgorithmException, UnsupportedEncodingException {
        MessageDigest messageDigest =  MessageDigest.getInstance("SHA-256");
        messageDigest.update(password.getBytes("UTF-8"));
        return new BigInteger(1, messageDigest.digest()).toString(16);
    }

	public void delete(Integer id) {
		Cliente obj = findById(id);
		if (obj.getChamados().size() > 0) {
			throw new DataIntegrityViolationException("Cliente possui ordens de serviço e não pode ser deletado!");
		}
		repository.deleteById(id);
	}

	private void validateCpfEmail(ClienteDTO objDTO) {
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
