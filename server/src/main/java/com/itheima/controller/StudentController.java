package com.itheima.controller;

import com.itheima.dto.R;
import com.itheima.dto.StudentQueryDTO;
import com.itheima.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StudentController {
    @Autowired
    private StudentService studentService;

    // @CrossOrigin("http://localhost:7070")
    @GetMapping("/api/students")
    public R all() {
        return R.ok(studentService.findAll());
    }

    @GetMapping("/api/students/q")
    public R q(StudentQueryDTO queryDTO) {
        return R.ok(studentService.findBy(queryDTO));
    }
}
