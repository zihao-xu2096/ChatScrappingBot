import psycopg2


def add_data(data) -> None:
    # Connect to the database
    connection = psycopg2.connect(
        host="localhost",
        database="postgres",
        user="postgres",
        password="admin")

    # Create a cursor object
    cursor = connection.cursor()

    # Insert the data into the "example_table" table
    cursor.execute(
        "INSERT INTO example_table (name, age) VALUES (%s, %s)",
        (data["name"], data["age"])
    )

    # Commit the changes to the database
    connection.commit()

    # Close the cursor and connection
    cursor.close()
    connection.close()
