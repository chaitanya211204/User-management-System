package com.example.crud_app.repository;

import com.example.crud_app.model.Employee;
import com.example.crud_app.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
    @Query
    Optional<User> findByEmail(String email);
}
