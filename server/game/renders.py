# from rest_framework import renderers
# import json

# class UserRenders(renderers.JSONRenderer):
#     charset = 'utf-8'
#     def render(self, data, accepted_media_type=None, renderer_context=None):
#         response = ''
#         if 'ErrorDetail' in str(data):
#             response = json.dumps({'error':data})
#         else:
#             response = json.dumps({data})
#         return response

# from rest_framework import renderers
# import json

# class UserRenders(renderers.JSONRenderer):
#     charset = 'utf-8'

#     def render(self, data, accepted_media_type=None, renderer_context=None):
#         if 'ErrorDetail' in str(data):
#             return json.dumps({'error': data})
#         return json.dumps({'data': data})

from rest_framework import renderers
from rest_framework.exceptions import ErrorDetail
import json

class UserRenders(renderers.JSONRenderer):
    charset = 'utf-8'

    def render(self, data, accepted_media_type=None, renderer_context=None):
        # Check if the data contains any ErrorDetail objects
        if isinstance(data, list) and any(isinstance(item, ErrorDetail) for item in data):
            # If there's an error, wrap the data in an 'error' key
            return json.dumps({'error': data})
        elif isinstance(data, dict) and any(isinstance(value, ErrorDetail) for value in data.values()):
            # If any of the dictionary values are ErrorDetails, return an error format
            return json.dumps({'error': data})

        # Otherwise, return the data wrapped in a 'data' key
        return json.dumps({'data': data})