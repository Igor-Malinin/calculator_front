Feature: testing calculator front
  Background: Visiting the calculator page
    Given I visiting the Calculator page 'http://localhost:8080'

  Scenario: checking for components rendering
    When I visiting the Calculator page 'http://localhost:8080'
    Then I see inputs, buttons, and dropdowns

  Scenario: checking for correct results after calculation
    When I using operation '+' on '125' and '15' in '10' system
    Then I get result '140'
    And I using operation '*' on '6' and '7' in '8' system
    And I get result '52'
    And I using operation '÷' on 'a67df8' and 'abf' in '16' system
    And I get result 'f7e'
    And I using operation '-' on '100101' and '1010' in '2' system
    And I get result '11011'

  Scenario: checking for input allowing to type only numbers and correct letters for 16 system
    When I choosing system '10' and typing '3210749fhsid2341' in first input
    Then In input I see only '32107492341'
    And I choosing system '2' and typing '579874101043241034012' in second input
    And I should see only '101' in first input and '10101001' in second input
    And I choosing system '16' and typing 'vnk4jzcnojq3ifjasbe5fkj1' in first input
    And I should see only '4c3fabe5f1' in first input

  Scenario: second input not allowing to type 0
    When I choosing operation '÷' and typing '0' in second input
    Then I see empty value in second input

  Scenario: checking for correct color of result
    When I choosing system '10' and typing numbers '20' and '88' and choosing operation '+' and clicking getResult
    Then I should see the result '108' in 'rgb(0, 128, 0)' color
    And I typing numbers '20' and '-3' and choosing operation '*' and clicking getResult
    And I should see the result '-60' in 'rgb(255, 0, 0)' color
    And I typing numbers '20' and '0' and and clicking getResult
    And I should see the result '0' in 'rgb(0, 0, 0)' color
