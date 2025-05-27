import java.util.List;

public class Records {
    record Person(String name, int age) {}
    public static void main(String[] args) {
        Person p1 = new Person("Alice", 30);
        Person p2 = new Person("Bob", 17);
        System.out.println(p1);
        System.out.println(p2);
        List<Person> people = List.of(p1, p2);
        people.stream().filter(p -> p.age() >= 18).forEach(System.out::println);
    }
}
