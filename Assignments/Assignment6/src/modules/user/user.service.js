import userModel from "../../DB/models/user.model.js";

export const signup = async (req, res, next) => {
    const { name, email, password, role } = req.body;
    const userExist = await userModel.findOne({ where: { email } });
    if (userExist) {
        return res.status(403).json({ msg: "email already exists" });
    }
    const user = userModel.build({ name, email, password, role });
    user.save();
    res.status(201).json({ msg: "user added" });
};

export const update = async (req, res, next) => {
    const { id } = req.params;
    const { name, email, password, role } = req.body;
    const userExist = await userModel.findOne({ where: { id } });
    if (!userExist) {
        return res.status(404).json({ msg: "user not found" });
    }
    userExist.update(
        { name, email, password, role },
        { where: { id }, validate: false },
    );
    userExist.save();
    res.status(201).json({ userExist });
};

export const byEmail = async (req, res, next) => {
    const { email } = req.query;
    if (!email) {
        return res.status(404).json({ msg: "query is required" });
    }
    const user = await userModel.findOne({ where: { email } });
    if (!user) {
        return res.status(404).json({ msg: "user not found" });
    }
    res.status(200).json({ user });
};

export const byPK = async (req, res, next) => {
    const { id } = req.params;
    const user = await userModel.findOne({
        where: { id },
        attributes: { exclude: "role" },
    });
    if (!user) {
        return res.status(404).json({ msg: "user not found" });
    }
    res.status(200).json({ user });
};
