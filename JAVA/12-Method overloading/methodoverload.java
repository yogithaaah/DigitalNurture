public class methodoverload {
    static int add(int a, int b) {
        return a + b;
    }

    static double add(double a, double b) {
        return a + b;
    }

    static int add(int a, int b, int c) {
        return a + b + c;
    }

    public static void main(String[] args) {
        System.out.println(add(7, 12));
        System.out.println(add(8.3, 2.5));
        System.out.println(add(6, 7, 8));
    }
}
