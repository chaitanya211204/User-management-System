package com.example.crud_app.controller;

import com.example.crud_app.model.User;
import com.example.crud_app.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping(path = "/user")
    public void registerNew(@RequestBody User u){
        userService.addNew(u);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/users")
    public List<User>getAll(){
        return userService.getAll();
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/getusers/{userId}")
    public ResponseEntity<User> getUserById(@PathVariable("userId") Integer userId){
        User found = userService.getUserById(Long.valueOf(userId));
        return ResponseEntity.ok(found);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping(path = "/user/{userId}")
    public void deleteUser(@PathVariable("userId") Integer userId){
        userService.deleteUser(userId);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/users/{userId}")
    public void updateUser(@PathVariable("userId") Integer userId, @RequestBody User updatedUser) {
        userService.updateUser(userId, updatedUser.getFirstname(),updatedUser.getLastname(), updatedUser.getEmail());
    }


}
