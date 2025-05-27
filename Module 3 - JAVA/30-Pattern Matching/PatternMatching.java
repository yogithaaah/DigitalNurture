public class PatternMatching {
    public static void main(String[] args) {
        checkType(10);
        checkType("Hello");
        checkType(3.14);
    }

    static void checkType(Object obj) {
        switch (obj) {
            case Integer i -> System.out.println("Integer: " + i);
            case String s -> System.out.println("String: " + s);
            case Double d -> System.out.println("Double: " + d);
            default -> System.out.println("Unknown type");
        }
    }
}
