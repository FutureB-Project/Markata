package com.futureB.backend.Entity;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/testing")
public class demo {

    @GetMapping
    public ResponseEntity<String> success(){
        return ResponseEntity.ok("Successful authentication using token.");
    }
}
