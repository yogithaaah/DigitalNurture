import java.lang.reflect.*;

public class Reflection{
    public static void main(String[] args) throws Exception {
        Class<?> cls = Class.forName("java.lang.String");
        Method[] methods = cls.getDeclaredMethods();
        for (Method m : methods) {
            System.out.println(m.getName());
        }
        Method method = cls.getMethod("length");
        String str = "Hello";
        System.out.println(method.invoke(str));
    }
}
