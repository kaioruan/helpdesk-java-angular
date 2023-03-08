package com.helpdesk.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.helpdesk.demo.domain.Pessoa;

public interface PessoaRepository extends JpaRepository<Pessoa, Integer> {

}
