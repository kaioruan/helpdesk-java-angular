package com.helpdesk.demo.config;

import java.io.UnsupportedEncodingException;
import java.security.NoSuchAlgorithmException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import com.helpdesk.demo.services.DBService;

@Configuration
@Profile("dev")
public class DevConfig {
	@Autowired
	private DBService dbService;

	@Value("${spring.jpa.hibernate.ddl-auto}")
	private String value;

	@Bean
	public boolean instanciaDB() throws NoSuchAlgorithmException, UnsupportedEncodingException {
		if (value.equals("create")) {
			this.dbService.instanciaDB();
		}
		return false;
	}
}