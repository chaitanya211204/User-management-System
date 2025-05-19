package com.example.crud_app.controller;

import com.example.crud_app.config.JwtService;
import com.example.crud_app.dto.UpdateProfileRequest;
import com.example.crud_app.model.User;
import com.example.crud_app.dto.DashBoardResponse;
import com.example.crud_app.dto.EmployeeDTO;
import com.example.crud_app.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class EmployeeController {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private JwtService jwtService;

    @GetMapping("/dashboard")
    public ResponseEntity<?> getDashboardData(@RequestHeader("Authorization") String authHeader) {
        try {
            String token = authHeader.substring(7); // Remove "Bearer
            String username = jwtService.extractUsername(token);
            User employee = userRepository.findByUsername(username)
                    .orElseThrow(() -> new RuntimeException("User not found"));

            EmployeeDTO employeeDTO = new EmployeeDTO(
                    employee.getFirstname()
                    //employee.getDepartment()
            );

            DashBoardResponse response = new DashBoardResponse(employeeDTO);
            return ResponseEntity.ok(response);

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("error", "Invalid Token or User Not Found"));
        }
    }

    @PostMapping("/update-profile")
    public ResponseEntity<?> updateProfile(
            @RequestBody UpdateProfileRequest update,
            @AuthenticationPrincipal UserDetails userDetails
    ) {
        String username = userDetails.getUsername();  // Usually returns email or username
        User user = userRepository.findByEmail(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        user.setLocation(update.getLocation());
        user.setDesignation(update.getDesignation());
        user.setDepartment(update.getDepartment());
        user.setHireDate(update.getHireDate());

        userRepository.save(user);

        return ResponseEntity.ok("Profile updated successfully");
    }
}
