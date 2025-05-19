package com.example.crud_app.model;

import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import java.security.SecureRandom;
import java.util.Random;

@Service
public class PasswordGenerator {
    private static final String UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    private static final String LOWER = "abcdefghijklmnopqrstuvwxyz";
    private static final String DIGITS = "0123456789";
    private static final String SPECIAL = "!@#$%&*()_+-=[]|,./?><";
    private static final String ALL_CHARACTERS = UPPER + LOWER + DIGITS + SPECIAL;

    private static final Random random = new SecureRandom();

    public static String generatePassword(int length) {
        if (length < 1) {
            throw new IllegalArgumentException("Password length must be at least 1.");
        }

        StringBuilder password = new StringBuilder(length);
        for (int i = 0; i < length; i++) {
            int randomIndex = random.nextInt(ALL_CHARACTERS.length());
            password.append(ALL_CHARACTERS.charAt(randomIndex));
        }
        return password.toString();
    }
}
