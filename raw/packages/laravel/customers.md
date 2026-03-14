# Customers

> Vatly Laravel Package - Customers

Every billable model can be linked to a Vatly customer. Customers are created automatically by Vatly during checkout and synced to your application via webhooks. You can also create customers explicitly if needed.

## Creating a customer

```php
// Create a Vatly customer for this user
$user->createAsVatlyCustomer();

// Create with extra data
$user->createAsVatlyCustomer([
    'locale' => 'nl_NL',
    'metadata' => ['internal_id' => $user->id],
]);
```

## Checking customer status

```php
// Check if the user has a Vatly customer ID
$user->hasVatlyId(); // bool

// Get the Vatly customer ID
$user->vatlyId(); // string|null
```

## Retrieving customer data

```php
// Get the full customer object from the Vatly API
$customer = $user->asVatlyCustomer();
```

## How it works

The `vatly_id` column on your billable model stores the Vatly customer identifier. When you call `createAsVatlyCustomer()`, it:

1. Sends a `POST` request to the Vatly API to create a customer
2. Stores the returned customer ID in the `vatly_id` column
3. Returns the customer response

If the user already has a `vatly_id`, calling `createAsVatlyCustomer()` will throw a `CustomerAlreadyCreatedException`.

## Automatic customer creation

When a user starts a checkout without an existing Vatly customer ID, Vatly creates the customer automatically during the checkout flow. The customer ID is synced back to your application via webhooks.

This means you don't need to call `createAsVatlyCustomer()` before starting a checkout - just redirect the user directly.
