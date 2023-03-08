package com.helpdesk.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.helpdesk.demo.domain.Tecnico;

public interface TecnicoRepository extends JpaRepository<Tecnico, Integer> {

}
