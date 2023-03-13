package com.helpdesk.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.helpdesk.demo.domain.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Integer> {

}
