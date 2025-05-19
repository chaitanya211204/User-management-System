package com.example.crud_app.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.LocalDate;
import java.util.Collection;
import java.util.List;

import static com.example.crud_app.model.PasswordGenerator.generatePassword;

@Data
@Builder
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class User implements UserDetails {
    @Id
    @GeneratedValue
    private long id;
    @Column(nullable = false)
    private String username;
    private String firstname;
    private String lastname;
    private String email;
    private String password;
    private String department;
    private String designation;
    private int age;
    private String gender;
    private String location;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate hireDate;



    @Enumerated(EnumType.STRING)
    private Role role;

    @JsonIgnore
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority("ROLE_" + role.name()));
    }

    @PrePersist
    public void generatePasswordIfNotSet() {
        if (this.password == null || this.password.isEmpty()) {
            this.password = generatePassword(8);
        }
    }


    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return this.username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
