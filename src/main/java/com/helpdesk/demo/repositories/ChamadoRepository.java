package com.helpdesk.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.helpdesk.demo.domain.Chamado;

public interface ChamadoRepository extends JpaRepository<Chamado, Integer> {

}
