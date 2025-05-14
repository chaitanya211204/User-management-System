package com.example.crud_app.controller;

import com.example.crud_app.model.User;
import com.example.crud_app.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping(path = "/user")
    public void registerNew(@RequestBody User u){
        userService.addNew(u);
    }

    @GetMapping("/users")
    public List<User>getAll(){
        return userService.getAll();
    }

    @GetMapping("/getusers/{userId}")
    public ResponseEntity<User> getUserById(@PathVariable("userId") Integer userId){
        User found = userService.getUserById(Long.valueOf(userId));
        return ResponseEntity.ok(found);
    }


    @DeleteMapping(path = "/user/{userId}")
    public void deleteUser(@PathVariable("userId") Integer userId){
        userService.deleteUser(userId);
    }

    @PutMapping("/users/{userId}")
    public void updateUser(@PathVariable("userId") Integer userId, @RequestBody User updatedUser) {
        userService.updateUser(userId, updatedUser.getFirstname(),updatedUser.getLastname(), updatedUser.getEmail());
    }

}
