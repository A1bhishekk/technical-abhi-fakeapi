import user from "../models/user-schema.js";

class UserController {
    // get all users 
    static async getAllUsers(req, res) {
        try {
            const users = await user.find();
            res.status(200).json(users);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    // get user by id
    static async getUserById(req, res) {
        const { id } = req.params;
        try {
            const userById = await user.findById(id);
            res.status(200).json(userById);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }


    // creating user 
    static createUser = async (req, res) => {
        try {
            const { name, age, email, mobile, country } = req.body;
            const newUser = new user({
                name,
                age,
                email,
                mobile,
                country
            });
            const data = await newUser.save();
            res.status(201).json({ message: "ID added successfully", data });

        } catch (err) {
            res.status(409).json({ message: err.message });

        }
    }

    // update user 
    static async updateUser(req, res) {
        const { id } = req.params;
        const { name, age, email, mobile, country } = req.body;
        try {
            const updatedUser = await user.findByIdAndUpdate(id, { name, age, email, mobile, country }, { new: true });
            res.status(200).json({ message: "User updated successfully", updatedUser });
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    // delete user
    static async deleteUser(req, res) {
        const { id } = req.params;
        try {
            const deletedUser = await user.findByIdAndDelete(id);
            res.status(200).json({ message: "user deleted successfully", deletedUser });
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

}

export default UserController;