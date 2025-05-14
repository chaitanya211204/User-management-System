package com.example.crud_app.service;

import com.example.crud_app.exception.UserNotFoundException;
import com.example.crud_app.model.User;
import com.example.crud_app.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getAll(){
        return userRepository.findAll();
    }

    public void addNew( User u){
        Optional<User> userByEmail = userRepository.findByEmail(u.getEmail());
        if(userByEmail.isPresent()){
            throw new IllegalStateException("email already used");
        }
        userRepository.save(u);
    }

    public void deleteUser(Integer userId) {
        Boolean exist = userRepository.existsById(Long.valueOf(userId));
        if(exist){
            userRepository.deleteById(Long.valueOf(userId));
        }
        else{
            throw new IllegalStateException("Given Id " + userId +" does no exist");
        }
    }

    @Transactional
    public void updateUser(Integer userId, String firstname, String lastname, String email) {
        User u = userRepository.findById(Long.valueOf(userId)).orElseThrow(() -> new IllegalStateException("given User does not exist"));
        if(firstname != null && !firstname.isEmpty() && !Objects.equals(u.getFirstname(), firstname)){
            u.setFirstname(firstname);
        }

        if(lastname != null && !lastname.isEmpty() && !Objects.equals(u.getLastname(), lastname)){
            u.setLastname(lastname);
        }

        if(email != null && !email.isEmpty() && !Objects.equals(u.getEmail(), email)){
            u.setEmail(email);
        }
    }

    public User getUserById(Long userId) {
        return (userRepository.findById(Long.valueOf(userId))
                .orElseThrow(() -> new UserNotFoundException(userId)));
    }
}
