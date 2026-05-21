# Webhook events

> Inspect webhook events and retrieve the full payload that Vatly delivered.

## The Webhook event API resource

A webhook event represents a single event delivery that Vatly generated. You can retrieve it later to inspect the exact payload that was sent.

### Properties

<table>
<thead>
  <tr>
    <th>
      Name
    </th>
    
    <th>
      Type
    </th>
    
    <th>
      Description
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <code>
        id
      </code>
    </td>
    
    <td>
      <code>
        string
      </code>
    </td>
    
    <td>
      Unique identifier for the webhook event.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        resource
      </code>
    </td>
    
    <td>
      <code>
        string
      </code>
    </td>
    
    <td>
      The resource type. Always <code>
        webhook_event
      </code>
      
      .
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        eventName
      </code>
    </td>
    
    <td>
      <code>
        string
      </code>
    </td>
    
    <td>
      Event name that triggered the webhook, such as <code>
        order.paid
      </code>
      
       or <code>
        subscription.updated
      </code>
      
      .
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        entityType
      </code>
    </td>
    
    <td>
      <code>
        string
      </code>
    </td>
    
    <td>
      Resource type the event relates to, such as <code>
        order
      </code>
      
      , <code>
        checkout
      </code>
      
      , or <code>
        subscription
      </code>
      
      .
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        entityId
      </code>
    </td>
    
    <td>
      <code>
        string
      </code>
    </td>
    
    <td>
      ID of the resource this event relates to.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        object
      </code>
    </td>
    
    <td>
      <code>
        object
      </code>
    </td>
    
    <td>
      Full resource payload as it existed when the event was created.
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        links
      </code>
    </td>
    
    <td>
      <code>
        object
      </code>
    </td>
    
    <td>
      HATEOAS links to related resources. Contains at least a <code>
        self
      </code>
      
       link.
    </td>
  </tr>
</tbody>
</table>

---

## Get a webhook event

`GET /v1/webhook-events/{eventId}`

Retrieve the full webhook event payload for a specific event ID.

<code-group>

```bash [cURL]
curl https://api.vatly.com/v1/webhook-events/evt_abc123def456 \
  -H "Authorization: Bearer live_your_api_key_here"
```

```php [PHP]
$vatly = new \Vatly\API\VatlyApiClient();
$vatly->setApiKey('live_your_api_key_here');

$event = $vatly->webhookEvents->get('evt_abc123def456');
```

```json [Response]
{
  "id": "evt_abc123def456",
  "resource": "webhook_event",
  "eventName": "subscription.updated",
  "entityType": "subscription",
  "entityId": "sub_abc123def456",
  "object": {
    "id": "sub_abc123def456",
    "resource": "subscription",
    "customerId": "cus_xyz789",
    "subscriptionPlanId": "subscription_plan_premium",
    "testmode": false,
    "name": "Premium Plan",
    "description": "Access to all premium features",
    "billingAddress": {
      "fullName": "John Doe",
      "companyName": null,
      "vatNumber": null,
      "streetAndNumber": "123 Main St",
      "streetAdditional": null,
      "city": "Amsterdam",
      "region": null,
      "postalCode": "1011AB",
      "country": "NL"
    },
    "basePrice": {
      "value": "99.99",
      "currency": "EUR"
    },
    "quantity": 1,
    "interval": "month",
    "intervalCount": 1,
    "status": "active",
    "startedAt": "2026-01-15T10:30:00Z",
    "endedAt": null,
    "cancelledAt": null,
    "renewedAt": "2026-02-15T10:30:00Z",
    "renewedUntil": "2026-03-15T10:30:00Z",
    "nextRenewalAt": "2026-03-15T10:30:00Z",
    "trialUntil": null,
    "links": {
      "self": {
        "href": "https://api.vatly.com/v1/subscriptions/sub_abc123def456",
        "type": "application/json"
      },
      "customer": {
        "href": "https://api.vatly.com/v1/customers/cus_xyz789",
        "type": "application/json"
      }
    }
  },
  "links": {
    "self": {
      "href": "https://api.vatly.com/v1/webhook-events/evt_abc123def456",
      "type": "application/json"
    }
  }
}
```

</code-group>

### Response

Returns the full stored webhook event, including the resource snapshot in the `object` field.

### Errors

<table>
<thead>
  <tr>
    <th>
      Status
    </th>
    
    <th>
      Meaning
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <code>
        401
      </code>
    </td>
    
    <td>
      Missing or invalid API key
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        403
      </code>
    </td>
    
    <td>
      You do not have access to this event
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        404
      </code>
    </td>
    
    <td>
      The webhook event was not found
    </td>
  </tr>
</tbody>
</table>
