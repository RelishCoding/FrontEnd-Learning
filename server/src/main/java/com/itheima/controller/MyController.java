package com.itheima.controller;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;
import java.util.List;

@Controller
public class MyController {
    @RequestMapping("/test")
    @ResponseBody
    public String test(User user, MultipartFile avatar) {
        System.out.println("user: " + user);
        System.out.println("avatar: " + avatar.getName());
        return "收到数据";
    }

    static class User {
        private String username;
        private String password;
        private int id;

        @DateTimeFormat(pattern = "yyyy-MM-dd")
        private LocalDate birthday;

        private String sex;
        private List<String> favorites;

        public String getUsername() {
            return username;
        }

        public void setUsername(String username) {
            this.username = username;
        }

        public String getPassword() {
            return password;
        }

        public void setPassword(String password) {
            this.password = password;
        }

        public int getId() {
            return id;
        }

        public void setId(int id) {
            this.id = id;
        }

        public LocalDate getBirthday() {
            return birthday;
        }

        public void setBirthday(LocalDate birthday) {
            this.birthday = birthday;
        }

        public String getSex() {
            return sex;
        }

        public void setSex(String sex) {
            this.sex = sex;
        }

        public List<String> getFavorites() {
            return favorites;
        }

        public void setFavorites(List<String> favorites) {
            this.favorites = favorites;
        }

        @Override
        public String toString() {
            return "User{" +
                    "username='" + username + '\'' +
                    ", password='" + password + '\'' +
                    ", id=" + id +
                    ", birthday=" + birthday +
                    ", sex='" + sex + '\'' +
                    ", favorites=" + favorites +
                    '}';
        }
    }
}
