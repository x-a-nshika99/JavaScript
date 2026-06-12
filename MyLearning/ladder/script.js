

//int
 numbers[5]; // Declares an array named 'numbers' that can hold 5 integers.
//double
 grades[10]; // Declares an array named 'grades' that can hold 10 doubles.
//char 
names[20][50]; // Declares a 2D array to store 20 names, each up to 50 characters long.

// ArrayList<Integer> numbers = new ArrayList<>(); // Creates an empty ArrayList of Integers.
numbers.add(10); // Adds an element to the ArrayList.
numbers.add(20);
numbers.add(30);

ArrayList<Integer> numbers = new ArrayList<>(Arrays.asList(1,2,3,4,5));
System.out.println(numbers.get(0)); // Accesses the first element (value: 1)
System.out.println(numbers.get(2)); // Accesses the third element (value: 3)

// class Car:
//     def __init__(self, make, model, color, num_doors, fuel_level): # Constructor - initializes the object
//         self.make = make          # Property: Car make (string)
//         self.model = model        # Property: Car model (string)
//         self.color = color        # Property: Car color (string)
//         self.num_doors = num_doors  # Property: Number of doors (integer)
//         self.fuel_level = fuel_level # Property: Fuel level (float)
//         self.engine_running = False # Property: Engine status (boolean)


// my_car = Car("Toyota", "Camry", "Blue", 4, 15.5)  # Creating a Car object

// print(my_car.make)  # Accessing a property: Output: Toyota
// print(my_car.fuel_level) # Accessing a property: Output: 15.5
// print(my_car.engine_running) # Accessing a property: Output: False

// my_car.color = "Red" # Modifying a property
// print(my_car.color) # Accessing a modified property: Output: Red



// class Car:
//     # ... (previous code) ...

//     def start_engine(self):
//         self.engine_running = True
//         print("Engine started.")

//     def accelerate(self, amount):
//         if self.engine_running:
//             self.fuel_level -= amount * 0.1 # Simulate fuel consumption
//             print("Accelerating...")
//         else:
//             print("Engine not started.")

// my_car.start_engine()
// my_car.accelerate(5) # Accelerate for 5 seconds
// print(my_car.fuel_level) # Check fuel level after acceleration


