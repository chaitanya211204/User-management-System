package com.example.crud_app.controller;

import com.example.crud_app.model.User;
import com.example.crud_app.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

//@RestController
//@RequestMapping("/api/admin/z1")
//public class AdminController {

//    @Autowired
//    private UserService userService;
//
//    @GetMapping("/all_users")
//    public ResponseEntity<?> getAdmin(){
//        List<User> all = userService.getAll();
//        if(all != null || !all.isEmpty()){
//            return new ResponseEntity<>(all, HttpStatus.OK);
//        }
//        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//    }
//}


