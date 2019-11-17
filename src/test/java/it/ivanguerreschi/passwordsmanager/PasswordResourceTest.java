package it.ivanguerreschi.passwordsmanager;

import io.quarkus.test.junit.QuarkusTest;

import org.junit.jupiter.api.Test;

import java.util.*;

import static io.restassured.RestAssured.given;
import static org.hamcrest.CoreMatchers.containsString;
import static org.hamcrest.core.IsNot.not;

@QuarkusTest
public class PasswordResourceTest {

	@Test
	public void testPasswordResources() {

		Map<String, Object> jsonAsMap = new HashMap<>();
		jsonAsMap.put("create", "2019-11-15");
		jsonAsMap.put("email", "Doe");
		jsonAsMap.put("name", "Doe");
		jsonAsMap.put("password", "Doe");

		given().when().get("/api").then().statusCode(200).body(containsString("google"), containsString("microsoft"),
				containsString("twitter"));

		given().contentType("application/json").when().delete("/api/1").then().statusCode(204);

		given().when().get("/api").then().statusCode(200).body(not(containsString("google")),
				containsString("microsoft"), containsString("twitter"));

		given().contentType("application/json").body(jsonAsMap).when().post("/api").then().statusCode(201).and()
				.body(containsString("Doe"));

		given().when().get("/api").then().statusCode(200).body(containsString("Doe"));
		
		given().contentType("application/json").body(jsonAsMap).when().put("/api/2").then().statusCode(204);
		
		given().when().get("/api/2").then().statusCode(200).body(containsString("Doe"));
	}

}