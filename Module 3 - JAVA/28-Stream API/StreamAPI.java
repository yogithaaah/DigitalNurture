import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class StreamAPI {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6);
        List<Integer> evens = numbers.stream().filter(n -> n % 2 == 0).collect(Collectors.toList());
        evens.forEach(System.out::println);
    }
}
