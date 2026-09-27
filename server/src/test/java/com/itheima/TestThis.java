package com.itheima;

public class TestThis {
    public static void main(String[] args) {
        Student stu = new Student("小明");
        stu.study("Java");
        stu.study1("Spring");
    }

    static class Student {
        private String name;

        public Student(String name) {
            this.name = name;
        }

        public void study1(String subject) {
            System.out.println(this.name + " 在学习 " + subject);
        }

        // 隐式参数 this
        public void study(Student this, String subject) {
            System.out.println(this.name + " 在学习 " + subject);
        }
    }
}
