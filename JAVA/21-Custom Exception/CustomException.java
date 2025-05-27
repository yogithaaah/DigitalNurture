class InvalidAgeException extends Exception {
    public InvalidAgeException(String message) {
        super(message);
    }
}

public class CustomException {
    public static void main(String[] args) {
        try {
            int age = 15;
            if (age < 18) throw new InvalidAgeException("Invalid age: " + age);
            System.out.println("Valid age: " + age);
        } catch (InvalidAgeException e) {
            System.out.println(e.getMessage());
        }
    }
}
