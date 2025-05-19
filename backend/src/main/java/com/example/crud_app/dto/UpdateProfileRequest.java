package com.example.crud_app.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UpdateProfileRequest {
    private String department;
    private String designation;
    private int age;
    private String gender;
    private String location;
    private LocalDate hireDate;
}
