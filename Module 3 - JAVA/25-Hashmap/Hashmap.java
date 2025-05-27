import java.util.HashMap;
import java.util.Scanner;

public class Hashmap {
    public static void main(String[] args) {
        HashMap<Integer, String> map = new HashMap<>();
        Scanner scanner = new Scanner(System.in);
        map.put(1, "Alice");
        map.put(2, "Bob");
        map.put(3, "Carol");
        int id = scanner.nextInt();
        System.out.println(map.get(id));
    }
}
