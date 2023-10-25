package com.futureB.backend.Service;

import com.futureB.backend.Entity.User;
import com.futureB.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    public User activateUser(User user) {
        Optional<User> userInDB = userRepository.findByEmailId(user.getEmailId());
        if(userInDB.isPresent()){
            User existingUser = userInDB.get();
            existingUser.setEnabled(true);
            return userRepository.save(existingUser);
        }else{
            return null;
        }
        //TODO delete the activation token entry after successful activation

    }
}
