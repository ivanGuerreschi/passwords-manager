package it.ivanguerreschi.passwordsmanager;

import io.quarkus.test.junit.QuarkusTest;
import org.junit.jupiter.api.Test;

import static io.restassured.RestAssured.given;
import static org.hamcrest.CoreMatchers.containsString;;

@QuarkusTest
public class PasswordResourceTest {

    @Test
    public void testHelloEndpoint() {
        given()
          .when().get("/api")
          .then()
             .statusCode(200)
             .body(
                     containsString("Cherry"),
                     containsString("Apple"),
                     containsString("Banana")
                     );
    }

}