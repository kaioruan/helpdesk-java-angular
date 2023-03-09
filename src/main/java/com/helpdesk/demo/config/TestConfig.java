package com.helpdesk.demo.config;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;

import com.helpdesk.demo.domain.Chamado;
import com.helpdesk.demo.domain.Cliente;
import com.helpdesk.demo.domain.Tecnico;
import com.helpdesk.demo.domain.enums.Perfil;
import com.helpdesk.demo.domain.enums.Prioridade;
import com.helpdesk.demo.domain.enums.Status;
import com.helpdesk.demo.repositories.ChamadoRepository;
import com.helpdesk.demo.repositories.ClienteRepository;
import com.helpdesk.demo.repositories.TecnicoRepository;

@Configuration
public class TestConfig implements CommandLineRunner {

	@Autowired
	private TecnicoRepository tecnicoRepository;
	@Autowired
	private ClienteRepository clienteRepository;
	@Autowired
	private ChamadoRepository chamadoRepository;

	@Override
	public void run(String... args) throws Exception {

		Tecnico tec1 = new Tecnico(null, "Kaio Ruan", "67376263861", "kaio@gmail.com", "123");
		tec1.addPerfil(Perfil.ADMIN);
		tecnicoRepository.saveAll(Arrays.asList(tec1));
		
		Cliente cli1 = new Cliente(null, "Linus Tovard", "32936826349", "linus@gmail.com", "123");
		clienteRepository.saveAll(Arrays.asList(cli1));
		
		Chamado c1 = new Chamado(null, Prioridade.MÉDIA, Status.ANDAMENTO, "Chamado 01", "Priomeiro Chamado", tec1, cli1);
		chamadoRepository.saveAll(Arrays.asList(c1));
	}

}	