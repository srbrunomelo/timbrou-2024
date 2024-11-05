import { z } from "zod";

export const InputSchema = z.object({
	data: z.object({
		birthday: z.string(),
		created_at: z.number(),
		email_addresses: z.array(
			z.object({
				email_address: z.string(),
				id: z.string(),
				linked_to: z.array(z.unknown()),
				object: z.string(),
				verification: z.object({ status: z.string(), strategy: z.string() }),
			}),
		),
		external_accounts: z.array(z.unknown()),
		external_id: z.string(),
		first_name: z.string(),
		gender: z.string(),
		id: z.string(),
		image_url: z.string(),
		last_name: z.string(),
		last_sign_in_at: z.number(),
		object: z.string(),
		password_enabled: z.boolean(),
		phone_numbers: z.array(z.unknown()),
		primary_email_address_id: z.string(),
		primary_phone_number_id: z.null(),
		primary_web3_wallet_id: z.null(),
		private_metadata: z.object({}),
		profile_image_url: z.string(),
		public_metadata: z.object({}),
		two_factor_enabled: z.boolean(),
		unsafe_metadata: z.object({}),
		updated_at: z.number(),
		username: z.null(),
		web3_wallets: z.array(z.unknown()),
	}),
	event_attributes: z.object({
		http_request: z.object({ client_ip: z.string(), user_agent: z.string() }),
	}),
	object: z.string(),
	timestamp: z.number(),
	type: z.string(),
});

export const OutputSchema = z.object({
	id: z.string(),
	externalId: z.string(),
	firstName: z.string(),
	lastName: z.string(),
	username: z.string().nullable(),
	email: z.string().email(),
	emailVerified: z.boolean(),
	emailVerificationStrategy: z.string(),
	profileImageUrl: z.string(),
	createdAt: z.number(),
});
