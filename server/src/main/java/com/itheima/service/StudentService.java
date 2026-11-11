package com.itheima.service;

import com.itheima.dto.Student;
import com.itheima.dto.StudentQueryDTO;
import com.itheima.mapper.StudentMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {
    @Autowired
    private StudentMapper studentMapper;

    public List<Student> findAll() {
        return studentMapper.findAll();
    }

    public List<Student> findBy(StudentQueryDTO queryDto) {
        return studentMapper.findBy(queryDto.name(), queryDto.sex(), queryDto.minAge(),
                queryDto.maxAge(), queryDto.offset(), queryDto.limit());
    }
}
