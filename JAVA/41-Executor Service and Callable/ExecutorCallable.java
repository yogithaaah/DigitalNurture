import java.util.*;
import java.util.concurrent.*;

public class ExecutorCallable {
    public static void main(String[] args) throws Exception {
        ExecutorService executor = Executors.newFixedThreadPool(3);
        List<Callable<String>> tasks = Arrays.asList(
            () -> "Task1", () -> "Task2", () -> "Task3"
        );
        List<Future<String>> results = executor.invokeAll(tasks);
        for (Future<String> f : results) {
            System.out.println(f.get());
        }
        executor.shutdown();
    }
}
