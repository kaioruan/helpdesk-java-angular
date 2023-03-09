package com.helpdesk.demo.services;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.helpdesk.demo.domain.Chamado;
import com.helpdesk.demo.domain.Cliente;
import com.helpdesk.demo.domain.Tecnico;
import com.helpdesk.demo.domain.enums.Perfil;
import com.helpdesk.demo.domain.enums.Prioridade;
import com.helpdesk.demo.domain.enums.Status;
import com.helpdesk.demo.repositories.ChamadoRepository;
import com.helpdesk.demo.repositories.ClienteRepository;
import com.helpdesk.demo.repositories.TecnicoRepository;

@Service
public class DBService {

	@Autowired
	private TecnicoRepository tecnicoRepository;
	@Autowired
	private ClienteRepository clienteRepository;
	@Autowired
	private ChamadoRepository chamadoRepository;
	public void instanciaDB() {
		Tecnico tec1 = new Tecnico(null, "Kaio Ruan", "67376263861", "kaio@gmail.com", "123");
		tec1.addPerfil(Perfil.ADMIN);
		Tecnico tec2 = new Tecnico(null, "Richard Stallman", "903.347.070-56", "stallman@mail.com", "123");
		Tecnico tec3 = new Tecnico(null, "Claude Elwood Shannon", "271.068.470-54", "shannon@mail.com", "123");
		Tecnico tec4 = new Tecnico(null, "Tim Berners-Lee", "162.720.120-39", "lee@mail.com", "123");
		Tecnico tec5 = new Tecnico(null, "Linus Torvalds", "778.556.170-27", "linus@mail.com", "123");
		tecnicoRepository.saveAll(Arrays.asList(tec1, tec2, tec3, tec4, tec5));
		
		Cliente cli1 = new Cliente(null, "Linus Tovard", "32936826349", "linus@gmail.com", "123");
		clienteRepository.saveAll(Arrays.asList(cli1));
		
		Chamado c1 = new Chamado(null, Prioridade.MÉDIA, Status.ANDAMENTO, "Chamado 01", "Priomeiro Chamado", tec1, cli1);
		chamadoRepository.saveAll(Arrays.asList(c1));
	}
}
