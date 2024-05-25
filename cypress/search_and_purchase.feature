Feature: Wyszukiwanie i zakup produktu w sklepie internetowym

  Scenario: Wyszukiwanie produktu
    Given użytkownik znajduje się na stronie głównej sklepu internetowego
    When użytkownik wpisuje "nazwa produktu" w polu wyszukiwania
    And klika przycisk "Szukaj"
    Then użytkownik widzi listę wyników wyszukiwania zawierających "nazwa produktu"

  Scenario: Dodanie produktu do koszyka
    Given użytkownik znajduje się na stronie wyników wyszukiwania dla "nazwa produktu"
    When użytkownik wybiera produkt z listy wyników
    And klika przycisk "Dodaj do koszyka"
    Then użytkownik widzi komunikat potwierdzający dodanie produktu do koszyka

  Scenario: Przejście do koszyka i sprawdzenie zawartości
    Given produkt jest dodany do koszyka
    When użytkownik klika ikonę koszyka
    Then użytkownik widzi stronę koszyka
    And produkt o nazwie "nazwa produktu" jest w koszyku
    And cena produktu jest prawidłowa

  Scenario: Finalizacja zakupu
    Given użytkownik znajduje się na stronie koszyka
    When użytkownik klika przycisk "Przejdź do kasy"
    And użytkownik wprowadza swoje dane dostawy i płatności
    And użytkownik klika przycisk "Zamów i zapłać"
    Then użytkownik widzi komunikat potwierdzający złożenie zamówienia
    And użytkownik otrzymuje numer zamówienia

  Scenario: Walidacja zakupu
    Given użytkownik złożył zamówienie
    When użytkownik przechodzi do sekcji "Moje zamówienia"
    Then użytkownik widzi ostatnie zamówienie z numerem zamówienia
    And status zamówienia jest "Przetwarzane"