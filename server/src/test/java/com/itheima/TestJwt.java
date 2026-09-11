package com.itheima;

import org.junit.jupiter.api.Test;

import java.nio.charset.StandardCharsets;
import java.util.Base64;

public class TestJwt {
    @Test
    public void test() {
        // 用 . 分隔成三部分
        // 第一部分 header，保存token使用的签名算法
        // 第二部分 poyload，保存token里包含的一些数据
        // 第三部分 签名
        // 第一部分和第二部分都没有加密，使用的base64编码
        // 关键在第三部分签名，签名能保证token令牌的数据不被篡改
        // 签名是根据前两部分外加一个密钥生成的
        String token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ6aGFuZyJ9.sDDRsT2ZsLC5OlVHSQ6qAOtgCV6z_J_FRm3SSeve614";

        // {"alg":"HS256"}
        System.out.println(new String(Base64.getDecoder().decode("eyJhbGciOiJIUzI1NiJ9")));
        // {"sub":"zhang"}
        System.out.println(new String(Base64.getDecoder().decode("eyJzdWIiOiJ6aGFuZyJ9")));


        String str = """
                {"sub":"admin"}""";
        // eyJzdWIiOiJhZG1pbiJ9
        System.out.println(Base64.getEncoder().encodeToString(str.getBytes(StandardCharsets.UTF_8)));
    }
}
