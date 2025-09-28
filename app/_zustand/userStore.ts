import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type User = {
	id: number;
	username: string;
	email: string;
	first_name?: string;
	last_name?: string;
	phone_number?: string;
	user_role?: number;
	is_verified?: boolean;
	token?: string;
	verified?: boolean;
	role?: {
		id: number;
		name: string;
	};
};

export type UserState = {
	user: User | null;
	setUser: (user: User | null) => void;
	logout: () => void;
};

export const useUserStore = create<UserState>()(
	persist(
		(set) => ({
			user: null,
			setUser: (user) => set({ user }),
			logout: () => set({ user: null }),
		}),
		{
			name: "user-storage",
			storage: createJSONStorage(() => localStorage),
		}
	)
);
