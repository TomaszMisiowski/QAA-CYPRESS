describe("HTTPBin API Tests", () => {
  // Test GET request with query parameters
  it("GET request with query parameters", () => {
    cy.request({
      method: "GET",
      url: "https://httpbin.org/get",
      qs: { param1: "value1", param2: "value2" },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.args).to.deep.equal({
        param1: "value1",
        param2: "value2",
      });
    });
  });

  // Test POST request with form data
  it("POST request with form data", () => {
    cy.request({
      method: "POST",
      url: "https://httpbin.org/post",
      form: true,
      body: { field1: "value1", field2: "value2" },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.form).to.deep.equal({
        field1: "value1",
        field2: "value2",
      });
    });
  });

  // Test sending standard headers
  it("Sending standard headers", () => {
    cy.request({
      method: "GET",
      url: "https://httpbin.org/headers",
      headers: {
        "User-Agent": "Cypress Test Agent",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.headers["User-Agent"]).to.eq("Cypress Test Agent");
    });
  });

  // Test sending custom headers
  it("Sending custom headers", () => {
    cy.request({
      method: "GET",
      url: "https://httpbin.org/headers",
      headers: {
        "X-Custom-Header": "CustomValue",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.headers["X-Custom-Header"]).to.eq("CustomValue");
    });
  });

  // Test PUT request
  it("PUT request with JSON body", () => {
    cy.request({
      method: "PUT",
      url: "https://httpbin.org/put",
      body: { field1: "value1", field2: "value2" },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.json).to.deep.equal({
        field1: "value1",
        field2: "value2",
      });
    });
  });

  // Test DELETE request
  it("DELETE request", () => {
    cy.request({
      method: "DELETE",
      url: "https://httpbin.org/delete",
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("data", "");
    });
  });

  // Test sending random query parameters
  it("GET request with random query parameters", () => {
    const randomParam = Math.random().toString(36).substring(7);
    cy.request({
      method: "GET",
      url: "https://httpbin.org/get",
      qs: { random: randomParam },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.args.random).to.eq(randomParam);
    });
  });

  // Test response content
  it("GET response content", () => {
    cy.request("https://httpbin.org/json").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("slideshow");
      expect(response.body.slideshow).to.have.property("slides");
      expect(response.body.slideshow.slides).to.be.an("array");
    });
  });

  // Test response time
  it("Measure response time", () => {
    cy.request("https://httpbin.org/delay/1").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.greaterThan(1000);
    });
  });

  // Test redirect
  it("Follow redirect", () => {
    cy.request({
      method: "GET",
      url: "https://httpbin.org/redirect/1",
      followRedirect: true,
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
// 1 GET request with query parameters: Wysyła żądanie GET z parametrami zapytania i sprawdza odpowiedź.
// 2 POST request with form data: Wysyła żądanie POST z danymi formularza i sprawdza odpowiedź.
// 3 Sending standard headers: Wysyła żądanie GET z nagłówkiem User - Agent i sprawdza odpowiedź.
// 4 Sending custom headers: Wysyła żądanie GET z niestandardowym nagłówkiem i sprawdza odpowiedź.
// 5 PUT request with JSON body: Wysyła żądanie PUT z ciałem JSON i sprawdza odpowiedź.
// 6 DELETE request: Wysyła żądanie DELETE i sprawdza odpowiedź.
// 7 GET request with random query parameters: Wysyła żądanie GET z losowym parametrem zapytania i sprawdza odpowiedź.
// 8 GET response content: Wysyła żądanie GET i sprawdza treść odpowiedzi.
// 9 Measure response time: Wysyła żądanie GET do endpointu z opóźnieniem i sprawdza czas trwania odpowiedzi.
// 10 Follow redirect: Wysyła żądanie GET do endpointu przekierowującego i sprawdza, czy przekierowanie działa poprawnie.
