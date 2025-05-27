import java.io.*;
import java.net.*;

public class Client {
    public static void main(String[] args) throws IOException {
        Socket socket = new Socket("localhost", 1234);
        BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
        PrintWriter out = new PrintWriter(socket.getOutputStream(), true);
        BufferedReader user = new BufferedReader(new InputStreamReader(System.in));
        String line;
        while ((line = user.readLine()) != null) {
            out.println(line);
            System.out.println("Server: " + in.readLine());
        }
    }
}
