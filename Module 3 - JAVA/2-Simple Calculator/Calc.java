import java.util.Scanner;

public class Calc {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Entering numbers
        System.out.print("Enter the first number: ");
        double n = scanner.nextDouble();

        System.out.print("Enter the second number: ");
        double m = scanner.nextDouble();

        // Choosing operation
        System.out.println("Choose an operation:");
        System.out.println("1. Addition (+)");
        System.out.println("2. Subtraction (-)");
        System.out.println("3. Multiplication (*)");
        System.out.println("4. Division (/)");
        System.out.print("Enter your choice (1-4): ");
        int choice = scanner.nextInt();

        double result = 0;
        boolean valid = true;

        switch (choice) {
            case 1:
                result = n + m;
                break;
            case 2:
                result = n - m;
                break;
            case 3:
                result = n * m;
                break;
            case 4:
                if (m != 0) {
                    result = n / m;
                } else {
                    System.out.println("Error: Division by zero!");
                    valid = false;
                }
                break;
            default:
                System.out.println("Invalid choice!");
                valid = false;
        }

        if (valid) {
            System.out.println("Result: " + result);
        }

        scanner.close();
    }
}
