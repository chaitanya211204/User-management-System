package com.example.crud_app.exception;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(Long userId){
        super("Requested ID does not exist");
    }
}
