package com.itheima;

import java.util.function.Consumer;

/**
 * lambda的参数捕获
 * 对比于JavaScript的闭包
 */
public class TestClosure {
    public static void main(String[] args) {
        a().accept(10); // 10,20
    }

    private static Consumer<Integer> a() {
        int y = 20;
        Consumer<Integer> b = x -> System.out.println(x + "," + y);
        return b;
    }
}
