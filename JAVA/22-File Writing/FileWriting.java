import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

public class FileWriting {
    public static void main(String[] args) throws IOException {
        Scanner scanner = new Scanner(System.in);
        String input = scanner.nextLine();
        FileWriter writer = new FileWriter("output.txt");
        writer.write(input);
        writer.close();
        System.out.println("Data written to file.");
    }
}
