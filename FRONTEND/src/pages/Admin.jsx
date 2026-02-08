import { useState } from "react";

export default function Admin() {
    const [formData, setFormData] = useState({
        title: "",
        price: "",
        description: "",
        image: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append("title", formData.title);
        data.append("price", formData.price);
        data.append("description", formData.description);
        data.append("image", formData.image);

        try {
            const res = await fetch("http://localhost:5000/api/services", {
                method: "POST",
                body: data,
            });

            if (!res.ok) throw new Error("Failed to add service");

            alert("Service added successfully ✅");
            window.location.reload();
        } catch (err) {
            alert("Error adding service ❌");
            console.error(err);
        }
    };

    return (
        <div className="container">
            <h2>Add New Service (Admin)</h2>

            <form onSubmit={handleSubmit} className="admin-form">
                <input
                    name="title"
                    placeholder="Service Title"
                    onChange={handleChange}
                    required
                />

                <input
                    name="price"
                    type="number"
                    placeholder="Price"
                    onChange={handleChange}
                    required
                />


                <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleChange}
                    required
                />

                <textarea
                    name="description"
                    placeholder="Description"
                    onChange={handleChange}
                />

                <button type="submit">Add Service</button>
            </form>
        </div>
    );
}
