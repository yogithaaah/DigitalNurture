public class VirtualThreads {
    public static void main(String[] args) {
        for (int i = 0; i < 100000; i++) {
            Thread.startVirtualThread(() -> System.out.println("Virtual thread running"));
        }
    }
}
